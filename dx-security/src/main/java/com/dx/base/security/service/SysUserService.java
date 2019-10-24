package com.dx.base.security.service;

import com.dx.base.security.bean.SysUser;

/**
 * Description: com.dx.base.security.service
 * security系统用户类
 *
 * @author yaoj
 * @version 1.0
 * @copyright Copyright (c) 文理电信
 * @since 2019/10/12
 */
public interface SysUserService {

    /**
     * 获取用户根据用户名
     * @param username
     * @return
     */
    SysUser getByName(String username);
}
