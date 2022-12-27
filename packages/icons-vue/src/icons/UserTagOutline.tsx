// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { FunctionalComponent } from 'vue';
import UserTagOutlineSvg from '@ant-design/icons-svg/lib/asn/UserTagOutline';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

export interface UserTagOutlineIconType extends FunctionalComponent<AntdIconProps> {
  displayName: string;
}

const UserTagOutline: UserTagOutlineIconType = (props, context) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={UserTagOutlineSvg}></AntdIcon>;
};

UserTagOutline.displayName = 'UserTagOutline';
UserTagOutline.inheritAttrs = false;
export default UserTagOutline;