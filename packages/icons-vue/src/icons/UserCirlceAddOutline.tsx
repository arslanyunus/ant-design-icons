// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { FunctionalComponent } from 'vue';
import UserCirlceAddOutlineSvg from '@ant-design/icons-svg/lib/asn/UserCirlceAddOutline';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

export interface UserCirlceAddOutlineIconType extends FunctionalComponent<AntdIconProps> {
  displayName: string;
}

const UserCirlceAddOutline: UserCirlceAddOutlineIconType = (props, context) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={UserCirlceAddOutlineSvg}></AntdIcon>;
};

UserCirlceAddOutline.displayName = 'UserCirlceAddOutline';
UserCirlceAddOutline.inheritAttrs = false;
export default UserCirlceAddOutline;