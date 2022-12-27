// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { FunctionalComponent } from 'vue';
import UserTwoToneSvg from '@ant-design/icons-svg/lib/asn/UserTwoTone';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

export interface UserTwoToneIconType extends FunctionalComponent<AntdIconProps> {
  displayName: string;
}

const UserTwoTone: UserTwoToneIconType = (props, context) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={UserTwoToneSvg}></AntdIcon>;
};

UserTwoTone.displayName = 'UserTwoTone';
UserTwoTone.inheritAttrs = false;
export default UserTwoTone;