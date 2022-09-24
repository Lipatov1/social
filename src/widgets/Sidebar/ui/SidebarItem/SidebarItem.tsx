import { useTranslation } from 'react-i18next';
import { useSelector } from 'react-redux';
import { memo } from 'react';
import { classNames } from '@/shared/lib/classNames/classNames';
import { SidebarItemType } from '../../model/types/sidebar';
import { AppLink } from '@/shared/ui/AppLink';
import { Icon } from '@/shared/ui/Icon';
import { getUserAuthData } from '@/entities/User';
import cls from './SidebarItem.module.scss';

interface SidebarItemProps {
    item: SidebarItemType;
    collapsed: boolean;
}

export const SidebarItem = memo((props: SidebarItemProps) => {
    const { item, collapsed } = props;
    const { t } = useTranslation();
    const isAuth = useSelector(getUserAuthData);

    if (item.authOnly && !isAuth) {
        return null;
    }

    return (
        <AppLink
            to={item.path}
            className={classNames(cls.item, {
                [cls.collapsed]: collapsed,
            })}
            activeClassName={cls.active}
        >
            <Icon Svg={item.Icon} />
            <span className={cls.link}>{t(item.text)}</span>
        </AppLink>
    );
});
