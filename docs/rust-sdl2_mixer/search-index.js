var searchIndex = {};
searchIndex['sdl2_mixer'] = {"items":[[0,"","sdl2_mixer","A binding for SDL2_mixer."],[1,"InitFlag","",""],[11,"bits","","",0],[1,"Chunk","","The internal format for an audio chunk."],[11,"raw","","",1],[11,"owned","","",1],[1,"Channel","","Sound effect channel."],[1,"Group","","Sound effect channel grouping."],[1,"Music","","This is an opaque data type used for Music data."],[11,"raw","","",2],[11,"owned","","",2],[2,"Fading","","Fader effect type enumerations"],[12,"NoFading","","",3],[12,"FadingOut","","",3],[12,"FadingIn","","",3],[2,"MusicType","","Music type enumerations"],[12,"MusicNone","","",4],[12,"MusicCmd","","",4],[12,"MusicWav","","",4],[12,"MusicMod","","",4],[12,"MusicMid","","",4],[12,"MusicOgg","","",4],[12,"MusicMp3","","",4],[12,"MusicMp3Mad","","",4],[12,"MusicFlac","","",4],[12,"MusicModPlug","","",4],[3,"get_linked_version","","Returns the version of the dynamically linked SDL_mixer library"],[3,"init","","Loads dynamic libraries and prepares them for use.  Flags should be\none or more flags from InitFlag."],[3,"quit","","Cleans up all dynamically loaded library handles, freeing memory."],[3,"open_audio","","Open the mixer with a certain audio format."],[3,"close_audio","","Shutdown and cleanup the mixer API."],[3,"query_spec","","Get the actual audio format in use by the opened audio device."],[3,"get_chunk_decoders_number","","Get the number of sample chunk decoders available from the Mix_GetChunkDecoder function."],[3,"get_chunk_decoder","","Get the name of the indexed sample chunk decoder."],[3,"allocate_channels","","Set the number of channels being mixed."],[3,"set_channel_finished","","When channel playback is halted, then the specified channel_finished function is called."],[3,"unset_channel_finished","",""],[3,"get_playing_channels_number","",""],[3,"get_paused_channels_number","",""],[3,"reserve_channels","","Reserve num channels from being used when playing samples when\npassing in -1 as a channel number to playback functions."],[3,"get_music_decoders_number","","Get the number of music decoders available."],[3,"get_music_decoder","","Get the name of the indexed music decoder."],[4,"AudioFormat","",""],[5,"AudioU8","",""],[5,"AudioS8","",""],[5,"AudioU16LSB","",""],[5,"AudioS16LSB","",""],[5,"AudioU16MSB","",""],[5,"AudioS16MSB","",""],[5,"AudioU16","",""],[5,"AudioS16","",""],[5,"AudioS32LSB","",""],[5,"AudioS32MSB","",""],[5,"AudioS32","",""],[5,"AudioF32LSB","",""],[5,"AudioF32MSB","",""],[5,"AudioF32","",""],[5,"AudioU16SYS","",""],[5,"AudioS16SYS","",""],[5,"AudioS32SYS","",""],[5,"AudioF32SYS","",""],[5,"DEFAULT_FORMAT","","The suggested default is signed 16bit samples in host byte order."],[5,"DEFAULT_CHANNELS","","Defualt channels: Stereo."],[5,"DEFAULT_FREQUENCY","","Good default sample rate in Hz (samples per second) for PC sound cards."],[5,"MAX_VOLUME","","Maximum value for any volume setting."],[5,"InitFlac","",""],[5,"InitMod","",""],[5,"InitModPlug","",""],[5,"InitMp3","",""],[5,"InitOgg","",""],[5,"InitFluidSynth","",""],[6,"LoaderRWops","","Loader trait for RWops"],[9,"load_wav","","Load src for use as a sample.",5],[10,"clone","","",0],[10,"eq","","",0],[10,"ne","","",0],[10,"empty","","Returns an empty set of flags.",0],[10,"all","","Returns the set containing all flags.",0],[10,"bits","","Returns the raw value of the flags currently stored.",0],[10,"from_bits","","Convert from underlying bit representation, unless that\nrepresentation contains bits that do not correspond to a flag.",0],[10,"from_bits_truncate","","Convert from underlying bit representation, dropping any bits\nthat do not correspond to flags.",0],[10,"is_empty","","Returns `true` if no flags are currently stored.",0],[10,"is_all","","Returns `true` if all flags are currently set.",0],[10,"intersects","","Returns `true` if there are flags common to both `self` and `other`.",0],[10,"contains","","Returns `true` all of the flags in `other` are contained within `self`.",0],[10,"insert","","Inserts the specified flags in-place.",0],[10,"remove","","Removes the specified flags in-place.",0],[10,"bitor","","Returns the union of the two sets of flags.",0],[10,"bitand","","Returns the intersection between the two sets of flags.",0],[10,"sub","","Returns the set difference of the two sets of flags.",0],[10,"not","","Returns the complement of this set of flags.",0],[10,"eq","","",1],[10,"ne","","",1],[10,"drop","","",1],[10,"from_file","","Load file for use as a sample.",1],[10,"set_volume","","Set chunk->volume to volume.",1],[10,"get_volume","","current volume for the chunk.",1],[10,"load_wav","sdl2::rwops","Load src for use as a sample.",6],[10,"from_i64","sdl2_mixer","",3],[10,"from_u64","","",3],[10,"fmt","","",3],[10,"hash","","",3],[10,"eq","","",3],[10,"ne","","",3],[10,"clone","","",3],[10,"fmt","","",7],[10,"eq","","",7],[10,"ne","","",7],[10,"all","","Represent for all channels (-1)",7],[10,"post","","This is the MIX_CHANNEL_POST (-2)",7],[10,"set_volume","","Set the volume for any allocated channel.",7],[10,"get_volume","","",7],[10,"play","","Play chunk on channel, or if channel is -1, pick the first free unreserved channel.",7],[10,"play_timed","","",7],[10,"fade_in","","Play chunk on channel, or if channel is -1, pick the first free unreserved channel.",7],[10,"fade_in_timed","","",7],[10,"pause","","Pause channel, or all playing channels if -1 is passed in.",7],[10,"resume","","Unpause channel, or all playing and paused channels if -1 is passed in.",7],[10,"halt","","Halt channel playback",7],[10,"expire","","Halt channel playback, after ticks milliseconds.",7],[10,"fade_out","","Gradually fade out which channel over ms milliseconds starting from now.",7],[10,"is_playing","","if channel is playing, or not.",7],[10,"is_paused","","if channel is paused, or not.",7],[10,"get_fading","","if channel is fading in, out, or not",7],[10,"get_chunk","","Get the most recent sample chunk pointer played on channel.",7],[10,"unregister_all_effects","","This removes all effects registered to channel.",7],[10,"set_panning","","",7],[10,"set_distance","","This effect simulates a simple attenuation of volume due to distance.",7],[10,"set_position","","This effect emulates a simple 3D audio effect.",7],[10,"set_reverse_stereo","","Simple reverse stereo, swaps left and right channel sound.",7],[10,"default","","",8],[10,"add_channels_range","","Add channels starting at from up through to to group tag,\nor reset it's group to the default group tag (-1).",8],[10,"add_channel","","Add which channel to group tag, or reset it's group to the default group tag",8],[10,"count","","Count the number of channels in group",8],[10,"find_available","","Find the first available (not playing) channel in group",8],[10,"find_oldest","","Find the oldest actively playing channel in group",8],[10,"find_newest","","Find the newest, most recently started, actively playing channel in group.",8],[10,"fade_out","","Gradually fade out channels in group over some milliseconds starting from now.\nReturns the number of channels set to fade out.",8],[10,"halt","","Halt playback on all channels in group.",8],[10,"from_i64","","",4],[10,"from_u64","","",4],[10,"fmt","","",4],[10,"hash","","",4],[10,"eq","","",4],[10,"ne","","",4],[10,"clone","","",4],[10,"eq","","",2],[10,"ne","","",2],[10,"drop","","",2],[10,"from_file","","Load music file to use.",2],[10,"get_type","","The file format encoding of the music.",2],[10,"play","","Play the loaded music loop times through from start to finish.",2],[10,"fade_in","","Fade in over ms milliseconds of time, the loaded music,\nplaying it loop times through from start to finish.",2],[10,"fade_in_from_pos","","Fade in over ms milliseconds of time, from position.",2],[10,"get_volume","","",2],[10,"set_volume","","Set the volume.",2],[10,"pause","","Pause the music playback.",2],[10,"resume","","Unpause the music.",2],[10,"rewind","","Rewind the music to the start.",2],[10,"set_pos","","Set the position of the currently playing music.",2],[10,"set_command","","Setup a command line music player to use to play music.",2],[10,"halt","","Halt playback of music.",2],[10,"fade_out","","Gradually fade out the music over ms milliseconds starting from now.",2],[10,"hook_finished","","",2],[10,"unhook_finished","","",2],[10,"is_playing","","If music is actively playing, or not.",2],[10,"is_paused","","If music is paused, or not.",2],[10,"get_fading","","If music is fading, or not.",2]],"paths":[[1,"InitFlag"],[1,"Chunk"],[1,"Music"],[2,"Fading"],[2,"MusicType"],[6,"LoaderRWops"],[1,"RWops"],[1,"Channel"],[1,"Group"]]};
initSearch(searchIndex);
