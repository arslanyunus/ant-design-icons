// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { FunctionalComponent } from 'vue';
import UserOctagonOutlineSvg from '@ant-design/icons-svg/lib/asn/UserOctagonOutline';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

export interface UserOctagonOutlineIconType extends FunctionalComponent<AntdIconProps> {
  displayName: string;
}

const UserOctagonOutline: UserOctagonOutlineIconType = (props, context) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={UserOctagonOutlineSvg}></AntdIcon>;
};

UserOctagonOutline.displayName = 'UserOctagonOutline';
UserOctagonOutline.inheritAttrs = false;
export default UserOctagonOutline;