const l2p_define = [
  {
    "l2p_idx": 0,
    "type": "read",
    "content": {

      "bit_reg":
        [
          { "name": "hoge00", "bit_msb": 31, "bit_lsb": 26, "description": "テストレジスタ0_0" },
          { "name": "hoge01", "bit_msb": 15, "bit_lsb": 12, "description": "テストレジスタ0_1" },
          { "name": "hoge02", "bit_msb": 11, "bit_lsb": 11, "description": "テストレジスタ0_2" },
          { "name": "hoge03", "bit_msb": 10, "bit_lsb": 8, "description": "テストレジスタ0_3" },
          { "name": "hoge04", "bit_msb": 5, "bit_lsb": 5, "description": "テストレジスタ0_4" },
          { "name": "hoge05", "bit_msb": 4, "bit_lsb": 4, "description": "テストレジスタ0_5" },
          { "name": "hoge06", "bit_msb": 3, "bit_lsb": 0, "description": "テストレジスタ0_6" }
        ]
    }
  },
  {
    "l2p_idx": 1,
    "type": "read",
    "content": {

      "bit_reg":
        [
          { "name": "hoge10", "bit_msb": 31, "bit_lsb": 26, "description": "テストレジスタ1_0" },
          { "name": "hoge11", "bit_msb": 15, "bit_lsb": 12, "description": "テストレジスタ1_1" },
          { "name": "hoge12", "bit_msb": 2, "bit_lsb": 0, "description": "テストレジスタ1_2" }
        ]
    }
  },
  {
    "l2p_idx": 3,
    "content": {
      "type": "read",
      "bit_reg":
        [
          { "name": "hoge30", "bit_msb": 31, "bit_lsb": 16, "description": "テストレジスタ3_0" },
          { "name": "hoge31", "bit_msb": 15, "bit_lsb": 0, "description": "テストレジスタ3_1" }
        ]
    }
  }
];
