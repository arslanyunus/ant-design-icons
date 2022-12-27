// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { FunctionalComponent } from 'vue';
import UserAddOutlineSvg from '@ant-design/icons-svg/lib/asn/UserAddOutline';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

export interface UserAddOutlineIconType extends FunctionalComponent<AntdIconProps> {
  displayName: string;
}

const UserAddOutline: UserAddOutlineIconType = (props, context) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={UserAddOutlineSvg}></AntdIcon>;
};

UserAddOutline.displayName = 'UserAddOutline';
UserAddOutline.inheritAttrs = false;
export default UserAddOutline;