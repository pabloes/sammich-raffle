//collection address wz steampunk
const POINT_PER_OWN = 1;

const owners = ["0x338ad1918362025f34b3701dac1e9648e8e8268f","0x338ad1918362025f34b3701dac1e9648e8e8268f","0x338ad1918362025f34b3701dac1e9648e8e8268f","0x338ad1918362025f34b3701dac1e9648e8e8268f","0x05d48ee3e815bf376fc79d283301cfdef872e280","0x63f587fc66d140368be6f808785937d63b8e6fc4","0x338ad1918362025f34b3701dac1e9648e8e8268f","0xa3a29d2a820e6e538a1aae125ff326795ed80fc3","0xa6d461497a2ec4b30f12c623c49312a0d0283ec9","0x81e4fb0c64bf49f89b57f6648562fc9a791b2e92","0xa941be630a39802f90c77b8d5f26add5a034e8ab","0x8d1bf34397d31903320ac0a8fee81b3bb7531537","0x4e064ddcc82194c12c7ff5712a6e1938aee9abe8","0x7e6d4810ea233d7588e3675d704571e29c4bcbba","0xd1388149d69a2cae149e741225d358fda6d853ec","0x622f53d0ed07a0cc7ccb85237ba7d722a4c15784","0x827de5897e7ded885f509af93fa74f4d8bd36798","0x011ce9b390021a403e52e6df3bf5c271665f0f2c","0x338ad1918362025f34b3701dac1e9648e8e8268f","0x87956abc4078a0cc3b89b419928b857b8af826ed","0xcd28963c2e1bac48931931f77ea984770eb25304","0x6b347a82fcac4e6a38d1fc40e3631bd8f9495e9f","0x5b9f96ba92fcf03d4bb22dcb658a07f702008e52","0x77f478a73858f55973e6ad80f57502793730b721","0x078ad2aa3b4527e4996d087906b2a3da51bba122","0x338ad1918362025f34b3701dac1e9648e8e8268f","0x3e00ffa2fa519b0cb592f9fa2382711b3e36fb8f","0xfad973f9d1170f61978e6fa495a93ce7b7c09475","0x4aefc510d4eb5f6dbbd5a2bd9bc7851d0f3bd1eb","0x057dc43af6187a931e78a56b3293912a5b42e5ec","0x54e6feef614946c0359d4937be5ee22ecdefa43e","0xe07e487d5a5e1098bbb4d259dac5ef83ae273f4e","0xdcea42ecfa8f2810ac79cadce4fe990606ca2333","0xbc89a84d19419cf4bc0483595deb825d00d8c2ea","0xe07d7b62ab04d68da8d2e29504c13c419bcecc4f","0x284b999d7de8026873dbf537b8e37d0f18f6bcc0","0x338ad1918362025f34b3701dac1e9648e8e8268f","0x338ad1918362025f34b3701dac1e9648e8e8268f","0x338ad1918362025f34b3701dac1e9648e8e8268f","0x338ad1918362025f34b3701dac1e9648e8e8268f","0x338ad1918362025f34b3701dac1e9648e8e8268f","0x338ad1918362025f34b3701dac1e9648e8e8268f","0x338ad1918362025f34b3701dac1e9648e8e8268f","0x338ad1918362025f34b3701dac1e9648e8e8268f","0x338ad1918362025f34b3701dac1e9648e8e8268f","0x338ad1918362025f34b3701dac1e9648e8e8268f","0x338ad1918362025f34b3701dac1e9648e8e8268f","0x338ad1918362025f34b3701dac1e9648e8e8268f","0x338ad1918362025f34b3701dac1e9648e8e8268f","0x338ad1918362025f34b3701dac1e9648e8e8268f","0x338ad1918362025f34b3701dac1e9648e8e8268f","0x338ad1918362025f34b3701dac1e9648e8e8268f","0x338ad1918362025f34b3701dac1e9648e8e8268f","0x338ad1918362025f34b3701dac1e9648e8e8268f","0x05d48ee3e815bf376fc79d283301cfdef872e280","0x63f587fc66d140368be6f808785937d63b8e6fc4","0xa941be630a39802f90c77b8d5f26add5a034e8ab","0x81e4fb0c64bf49f89b57f6648562fc9a791b2e92","0x51e723b14b160b9b420cbf7ccdb889f36213f0f3","0x63b1335b3411c0a010b1029a71eeb21a7d4a05fc","0xb45714bd67b88a178b19bd813e85b36eb0683e10","0x7e6d4810ea233d7588e3675d704571e29c4bcbba","0xd1388149d69a2cae149e741225d358fda6d853ec","0x622f53d0ed07a0cc7ccb85237ba7d722a4c15784","0x338ad1918362025f34b3701dac1e9648e8e8268f","0xcf10cd8b5dc2323b1eb6de6164647756bad4de4d","0xa88fb9382eecb56dd4f9ca1c53d9ac3b85878799","0xe8c3ea760e32477ea5db4eb0ebd85a221da6ae5f","0x87956abc4078a0cc3b89b419928b857b8af826ed","0xcd28963c2e1bac48931931f77ea984770eb25304","0x5537e702bcdd505bcb224b54f0779d71ff3dc42a","0xcf31c47e2f336deaf1bdc578791244cc88e62c17","0x5c2cb5db7461a4773b3abacad11ca765196ac550","0xaaf0eb7d49cddbb8d6d516689b9427cf69239c9f","0xc3812aa6efdb5ff999e70e367c2eb9068cbfc793","0xa6d461497a2ec4b30f12c623c49312a0d0283ec9","0xe07e487d5a5e1098bbb4d259dac5ef83ae273f4e","0x77f478a73858f55973e6ad80f57502793730b721","0xc1a99fea9e3c4337cbc6c0551ff0e76791f34cf2","0x338ad1918362025f34b3701dac1e9648e8e8268f","0xcd28963c2e1bac48931931f77ea984770eb25304","0x019ed608dd806b80193942f2a960e7ac8abb2ee3","0xdb06ffe93170ea1045bcb4a28a8fa3b12418f143","0xbc89a84d19419cf4bc0483595deb825d00d8c2ea","0x716342594dd0c6dd2efdd719153696c67760f461","0xe07d7b62ab04d68da8d2e29504c13c419bcecc4f","0xaa0f22e740850d970bf6aa74c6da1939e46a49d9","0x338ad1918362025f34b3701dac1e9648e8e8268f","0x338ad1918362025f34b3701dac1e9648e8e8268f","0x338ad1918362025f34b3701dac1e9648e8e8268f","0x338ad1918362025f34b3701dac1e9648e8e8268f","0x338ad1918362025f34b3701dac1e9648e8e8268f","0x338ad1918362025f34b3701dac1e9648e8e8268f","0x338ad1918362025f34b3701dac1e9648e8e8268f","0x338ad1918362025f34b3701dac1e9648e8e8268f","0x338ad1918362025f34b3701dac1e9648e8e8268f","0x338ad1918362025f34b3701dac1e9648e8e8268f","0x338ad1918362025f34b3701dac1e9648e8e8268f","0x338ad1918362025f34b3701dac1e9648e8e8268f","0x338ad1918362025f34b3701dac1e9648e8e8268f","0x338ad1918362025f34b3701dac1e9648e8e8268f","0x338ad1918362025f34b3701dac1e9648e8e8268f","0x338ad1918362025f34b3701dac1e9648e8e8268f","0xe2b6024873d218b2e83b462d3658d8d7c3f55a18","0x63f587fc66d140368be6f808785937d63b8e6fc4","0x5b9f96ba92fcf03d4bb22dcb658a07f702008e52","0xf7c441844d16b9bbc7f5a83e52b2dff6b7c58150","0x338ad1918362025f34b3701dac1e9648e8e8268f","0xa6d461497a2ec4b30f12c623c49312a0d0283ec9","0x81e4fb0c64bf49f89b57f6648562fc9a791b2e92","0x23be90335e79d3245615985d91f69814f98a0fab","0x8d1bf34397d31903320ac0a8fee81b3bb7531537","0x7e6d4810ea233d7588e3675d704571e29c4bcbba","0xd1388149d69a2cae149e741225d358fda6d853ec","0x622f53d0ed07a0cc7ccb85237ba7d722a4c15784","0x77f478a73858f55973e6ad80f57502793730b721","0x35e642029b911a63c3bebca05fa5e1a1460e57f0","0xbc89a84d19419cf4bc0483595deb825d00d8c2ea","0x87956abc4078a0cc3b89b419928b857b8af826ed","0xcd28963c2e1bac48931931f77ea984770eb25304","0x338ad1918362025f34b3701dac1e9648e8e8268f","0x338ad1918362025f34b3701dac1e9648e8e8268f","0xe07e487d5a5e1098bbb4d259dac5ef83ae273f4e","0x154620ddfdcd6ab15dd9c1682386debad1eef536","0x73deaeb8aa241b6fcdb992060ae43193cccbf638","0x777dde3eb926b15bd57495fab77484bff7edef53","0xd6f1072f5172c3297b3224074f346b600f094717","0x0ae4ffdff57270c06e4751d1afa9efef8a5bdc9c","0xdbc17336c4d7fed4b70c83b20e6d73cc59f51d0b","0xe07e487d5a5e1098bbb4d259dac5ef83ae273f4e","0x6b9081dd2d2066a05b20303cbd40bce51d031e50","0xd301f9cce53cd20b76bb75967c1915560dc5d878","0xfa46dedf812c5803b1e2cea10eef3f27dafeca56","0xe3a589699119e8e337847291db0b8100d09b3e74","0xe07d7b62ab04d68da8d2e29504c13c419bcecc4f","0x30f7b00c1bcce79612446815b9626a5fa81a867a","0x30f7b00c1bcce79612446815b9626a5fa81a867a","0x338ad1918362025f34b3701dac1e9648e8e8268f","0x338ad1918362025f34b3701dac1e9648e8e8268f","0x338ad1918362025f34b3701dac1e9648e8e8268f","0x338ad1918362025f34b3701dac1e9648e8e8268f","0x338ad1918362025f34b3701dac1e9648e8e8268f","0x338ad1918362025f34b3701dac1e9648e8e8268f","0x338ad1918362025f34b3701dac1e9648e8e8268f","0x338ad1918362025f34b3701dac1e9648e8e8268f","0x338ad1918362025f34b3701dac1e9648e8e8268f","0x338ad1918362025f34b3701dac1e9648e8e8268f","0x338ad1918362025f34b3701dac1e9648e8e8268f","0x338ad1918362025f34b3701dac1e9648e8e8268f","0x338ad1918362025f34b3701dac1e9648e8e8268f","0x338ad1918362025f34b3701dac1e9648e8e8268f","0x338ad1918362025f34b3701dac1e9648e8e8268f","0x338ad1918362025f34b3701dac1e9648e8e8268f","0x338ad1918362025f34b3701dac1e9648e8e8268f","0x338ad1918362025f34b3701dac1e9648e8e8268f","0x63f587fc66d140368be6f808785937d63b8e6fc4","0x8b51c1ba09ee33e7649cac62ccb6d0f410f5647a","0x8d1bf34397d31903320ac0a8fee81b3bb7531537","0xa5e2bb97de3c62ca06f1a2293eb7e01c114e9a49","0x81e4fb0c64bf49f89b57f6648562fc9a791b2e92","0x8d1bf34397d31903320ac0a8fee81b3bb7531537","0x77f478a73858f55973e6ad80f57502793730b721","0x7e6d4810ea233d7588e3675d704571e29c4bcbba","0x338ad1918362025f34b3701dac1e9648e8e8268f","0xd1388149d69a2cae149e741225d358fda6d853ec","0x622f53d0ed07a0cc7ccb85237ba7d722a4c15784","0x154620ddfdcd6ab15dd9c1682386debad1eef536","0xd95c9af95f3e5b263db0f1e314d81b6eea9fdbf7","0x87956abc4078a0cc3b89b419928b857b8af826ed","0xcd28963c2e1bac48931931f77ea984770eb25304","0x7e6d4810ea233d7588e3675d704571e29c4bcbba","0x614a61a3b7f2fd8750acaad63b2a0cfe8b8524f1","0x54e6feef614946c0359d4937be5ee22ecdefa43e","0xa6d461497a2ec4b30f12c623c49312a0d0283ec9","0x33a003fcf9a84d32b40b7946d313c54451ce28b4","0x284b999d7de8026873dbf537b8e37d0f18f6bcc0","0x338ad1918362025f34b3701dac1e9648e8e8268f","0x8d1bf34397d31903320ac0a8fee81b3bb7531537","0x77f478a73858f55973e6ad80f57502793730b721","0x019ed608dd806b80193942f2a960e7ac8abb2ee3","0x3e00ffa2fa519b0cb592f9fa2382711b3e36fb8f","0xd4f20b86ab05e5e91cecfefe874657b0f7bfc87d","0xe2cfeab2beba9a7f09fd981f13e84df1e9978a5e","0xbc89a84d19419cf4bc0483595deb825d00d8c2ea","0xaa0f22e740850d970bf6aa74c6da1939e46a49d9","0xc96d61b2291e87438614258fef3d23fdda19243f","0x1f667f4d615c4931f2fd215d458f19c6a03c59dd","0xf0d193d8524ec55fe2f5159aad2ba1a264993605","0xf0d193d8524ec55fe2f5159aad2ba1a264993605","0xe07d7b62ab04d68da8d2e29504c13c419bcecc4f","0x60a43df8f1c7a4156081717f1396cb587efb95c4","0x63b1335b3411c0a010b1029a71eeb21a7d4a05fc","0x338ad1918362025f34b3701dac1e9648e8e8268f","0x338ad1918362025f34b3701dac1e9648e8e8268f","0x338ad1918362025f34b3701dac1e9648e8e8268f","0x338ad1918362025f34b3701dac1e9648e8e8268f","0x338ad1918362025f34b3701dac1e9648e8e8268f","0x338ad1918362025f34b3701dac1e9648e8e8268f","0x338ad1918362025f34b3701dac1e9648e8e8268f","0x338ad1918362025f34b3701dac1e9648e8e8268f","0x338ad1918362025f34b3701dac1e9648e8e8268f","0x338ad1918362025f34b3701dac1e9648e8e8268f","0x338ad1918362025f34b3701dac1e9648e8e8268f","0x338ad1918362025f34b3701dac1e9648e8e8268f","0x338ad1918362025f34b3701dac1e9648e8e8268f","0x338ad1918362025f34b3701dac1e9648e8e8268f","0x338ad1918362025f34b3701dac1e9648e8e8268f","0x338ad1918362025f34b3701dac1e9648e8e8268f","0x338ad1918362025f34b3701dac1e9648e8e8268f","0x338ad1918362025f34b3701dac1e9648e8e8268f","0x5b9f96ba92fcf03d4bb22dcb658a07f702008e52","0x63f587fc66d140368be6f808785937d63b8e6fc4","0x8b51c1ba09ee33e7649cac62ccb6d0f410f5647a","0xe2b6024873d218b2e83b462d3658d8d7c3f55a18","0x81e4fb0c64bf49f89b57f6648562fc9a791b2e92","0xa941be630a39802f90c77b8d5f26add5a034e8ab","0x8d1bf34397d31903320ac0a8fee81b3bb7531537","0x338ad1918362025f34b3701dac1e9648e8e8268f","0x63b1335b3411c0a010b1029a71eeb21a7d4a05fc","0x7e6d4810ea233d7588e3675d704571e29c4bcbba","0xd1388149d69a2cae149e741225d358fda6d853ec","0x622f53d0ed07a0cc7ccb85237ba7d722a4c15784","0x33a003fcf9a84d32b40b7946d313c54451ce28b4","0x5debf9288bb29b29ca8eb71c8ca7359ae77f7ee2","0x87956abc4078a0cc3b89b419928b857b8af826ed","0xcd28963c2e1bac48931931f77ea984770eb25304","0xf4c64db66ffb301985f5ecd85c8f3f9c02f2659d","0x77f478a73858f55973e6ad80f57502793730b721","0x338ad1918362025f34b3701dac1e9648e8e8268f","0xe07e487d5a5e1098bbb4d259dac5ef83ae273f4e","0x3e00ffa2fa519b0cb592f9fa2382711b3e36fb8f","0x614a61a3b7f2fd8750acaad63b2a0cfe8b8524f1","0xf4c64db66ffb301985f5ecd85c8f3f9c02f2659d","0xbdffd84b5229d123bded843b270ecebd9707c7a3","0x572d45670afa384867f2783791ff6f46fd41f9d5","0xd48dcf447f17c8482454200ef64f7b07f5a08a2c","0x338ad1918362025f34b3701dac1e9648e8e8268f","0xe07d7b62ab04d68da8d2e29504c13c419bcecc4f","0x5c2cb5db7461a4773b3abacad11ca765196ac550","0x338ad1918362025f34b3701dac1e9648e8e8268f","0x338ad1918362025f34b3701dac1e9648e8e8268f","0x338ad1918362025f34b3701dac1e9648e8e8268f","0x338ad1918362025f34b3701dac1e9648e8e8268f","0x338ad1918362025f34b3701dac1e9648e8e8268f","0x338ad1918362025f34b3701dac1e9648e8e8268f","0x338ad1918362025f34b3701dac1e9648e8e8268f","0x338ad1918362025f34b3701dac1e9648e8e8268f","0x338ad1918362025f34b3701dac1e9648e8e8268f","0x338ad1918362025f34b3701dac1e9648e8e8268f","0x338ad1918362025f34b3701dac1e9648e8e8268f","0x338ad1918362025f34b3701dac1e9648e8e8268f","0x338ad1918362025f34b3701dac1e9648e8e8268f","0x338ad1918362025f34b3701dac1e9648e8e8268f","0x338ad1918362025f34b3701dac1e9648e8e8268f","0x63f587fc66d140368be6f808785937d63b8e6fc4","0xe07e487d5a5e1098bbb4d259dac5ef83ae273f4e","0x81e4fb0c64bf49f89b57f6648562fc9a791b2e92","0x338ad1918362025f34b3701dac1e9648e8e8268f","0x8d1bf34397d31903320ac0a8fee81b3bb7531537","0x7e6d4810ea233d7588e3675d704571e29c4bcbba","0xd1388149d69a2cae149e741225d358fda6d853ec","0x622f53d0ed07a0cc7ccb85237ba7d722a4c15784","0xc19dcedf29673539de6d5c1b0cbdedb1cf0de8ff","0x87956abc4078a0cc3b89b419928b857b8af826ed","0xcd28963c2e1bac48931931f77ea984770eb25304","0xfcacace2713d41c02666e2643e5583793196c935","0x91e222ed7598efbcfe7190481f2fd14897e168c8","0x338ad1918362025f34b3701dac1e9648e8e8268f","0xe07e487d5a5e1098bbb4d259dac5ef83ae273f4e","0x3e00ffa2fa519b0cb592f9fa2382711b3e36fb8f","0xe07e487d5a5e1098bbb4d259dac5ef83ae273f4e","0xbf37e8aed56003b86922b2991f9fa30087f297bf","0x77f478a73858f55973e6ad80f57502793730b721","0x019ed608dd806b80193942f2a960e7ac8abb2ee3","0xbc89a84d19419cf4bc0483595deb825d00d8c2ea","0x338ad1918362025f34b3701dac1e9648e8e8268f","0xe07d7b62ab04d68da8d2e29504c13c419bcecc4f","0x813237fdb0c5f046575c6cd4650077923c8e4039","0x338ad1918362025f34b3701dac1e9648e8e8268f","0x338ad1918362025f34b3701dac1e9648e8e8268f","0x338ad1918362025f34b3701dac1e9648e8e8268f","0x338ad1918362025f34b3701dac1e9648e8e8268f","0x338ad1918362025f34b3701dac1e9648e8e8268f","0x338ad1918362025f34b3701dac1e9648e8e8268f","0x338ad1918362025f34b3701dac1e9648e8e8268f","0x338ad1918362025f34b3701dac1e9648e8e8268f","0x338ad1918362025f34b3701dac1e9648e8e8268f","0x338ad1918362025f34b3701dac1e9648e8e8268f","0x338ad1918362025f34b3701dac1e9648e8e8268f","0x338ad1918362025f34b3701dac1e9648e8e8268f","0x338ad1918362025f34b3701dac1e9648e8e8268f","0x338ad1918362025f34b3701dac1e9648e8e8268f"]
.filter(i=>i!=="0x338ad1918362025f34b3701dac1e9648e8e8268f")//decentraland
.filter(i=>i!=="0x598f8af1565003ae7456dac280a18ee826df7a2c")//pablo
;

const ownerScores = owners.reduce((acc, current)=>{
    acc[current] = {
        address:current,
        score:(acc[current] && acc[current].score||0)+POINT_PER_OWN
    };
    return acc;
},{});

module.exports = ownerScores;

console.log(ownerScores);