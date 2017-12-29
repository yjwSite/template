(function(WebUploader){

    window.onload = function(){
        initUpload();
        addOkListener();
    };

    function initUpload() {
        // debugger
        var audioUploader = WebUploader.create({
            auto: true,
            swf: '/js/lib/webuploader/Uploader.swf',
            server: editor.options.videoUploadUrl,
            pick: '#audioPicker',
            accept: {
                title: 'Audios',
                extensions: 'mp3',  //限制上传文件的格式
                mimeTypes: 'audio/mpeg'
            },
            chunked: true,					//是否分片
            chunkSize: 1 * 100000,             //每一片的大小 B
            //chunkSize: 24,
            chunkRetry: 2,					//允许重传的次数
            //runtimeOrder: 'flash'
            threads: 1,
            fileNumLimit: 1 //验证文件总数量, 超出则不允许加入队列。
            //fileSizeLimit {int} 验证文件总大小是否超出限制, 超出则不允许加入队列。
            //fileSingleSizeLimit {int} 验证单个文件大小是否超出限制, 超出则不允许加入队列。
        });

        audioUploader.on('fileQueued', function (file) {
            $list = jQuery("#audioContent");
            $li = jQuery('<div id="' + file.id + '" class="item" style="float: left;margin-right:20px">' +
                '<h4 class="info">' + '文件名称：' + file.name + '</h4>' +
                '<p class="state">' + '上传状态：' + '等待上传...</p>' +
                '<span style="vertical-align: top">' + '进度条:' + '</span>' +
                '<div class="progress progress-striped active" style="display: inline-block">' +
                '<div class="progress-bar" role="progressbar" style="width: 0%">' + '</div>' +
                '</div>' +
                '</div>');
            $list.append($li);
            audioUploader.uid = uuid();


            function uuid() {
                var uuid;
                var s = [];
                var hexDigits = "0123456789abcdef";
                for (var i = 0; i < 32; i++) {
                    s[i] = hexDigits.substr(Math.floor(Math.random() * 0x10), 1);
                }
                s[14] = "4";
                s[19] = hexDigits.substr((s[19] & 0x3) | 0x8, 1);
                uuid = s.join("");
                //sessionStorage.setItem('sss',uuid)
                return uuid;
            }
        });

        audioUploader.on('uploadProgress', function (file, percentage) {
            var $li = jQuery('#' + file.id),
                $percent = $li.find('.progress .progress-bar');

            $li.find('p.state').text('上传中' + (percentage * 100).toFixed(2) + '%');
            $percent.css('width', percentage * 100 + '%');

        });

        audioUploader.on('uploadBeforeSend', function (obj, data, headers) {
            data.uid = audioUploader.uid;
            data.fileName = audioUploader.fileName;
            data.fileGroupId = audioUploader.groupID;
        });

        audioUploader.on('uploadAccept', function (object, ret) {
            if (ret.body.groupID) {
                var url = ret.body.groupID + '/' + ret.body.fileName;

                $G('baiduUploadAudioUrl').value = editor.options.fileServer + url;
            }

            if (ret.body.fileName) {
                audioUploader.fileName = ret.body.fileName;
                audioUploader.groupID = ret.body.groupID;
            }
        });

        audioUploader.on('uploadComplete', function (file) {
            // debugger
            jQuery('p.state').text('上传成功 !');
        });
    }

    /**
     * 监听确认和取消两个按钮事件，用户执行插入或者清空正在播放的视频实例操作
     */
    function addOkListener(){
        dialog.onok = function(){
            // $G("preview").innerHTML = "";
            // debugger
            //editor是编辑器实例
            //在编辑器里插入一个音乐
            // editor.execCommand( 'music' , {
            //     width: 400,
            //     height: 95,
            //     align: "center",
            //     url: "音乐地址"
            // } );
            editor.execCommand( 'inserthtml' , "<audio src='"+ $G('baiduUploadAudioUrl').value +"' controls='controls'>" );
        };
        dialog.oncancel = function(){
            // $G("preview").innerHTML = "";
        };
    }
})(WebUploader);
