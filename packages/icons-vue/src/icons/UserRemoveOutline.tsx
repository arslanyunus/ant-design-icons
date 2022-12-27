// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { FunctionalComponent } from 'vue';
import UserRemoveOutlineSvg from '@ant-design/icons-svg/lib/asn/UserRemoveOutline';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

export interface UserRemoveOutlineIconType extends FunctionalComponent<AntdIconProps> {
  displayName: string;
}

const UserRemoveOutline: UserRemoveOutlineIconType = (props, context) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={UserRemoveOutlineSvg}></AntdIcon>;
};

UserRemoveOutline.displayName = 'UserRemoveOutline';
UserRemoveOutline.inheritAttrs = false;
export default UserRemoveOutline;