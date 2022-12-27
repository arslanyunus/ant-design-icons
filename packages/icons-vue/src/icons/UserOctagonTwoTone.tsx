// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { FunctionalComponent } from 'vue';
import UserOctagonTwoToneSvg from '@ant-design/icons-svg/lib/asn/UserOctagonTwoTone';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

export interface UserOctagonTwoToneIconType extends FunctionalComponent<AntdIconProps> {
  displayName: string;
}

const UserOctagonTwoTone: UserOctagonTwoToneIconType = (props, context) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={UserOctagonTwoToneSvg}></AntdIcon>;
};

UserOctagonTwoTone.displayName = 'UserOctagonTwoTone';
UserOctagonTwoTone.inheritAttrs = false;
export default UserOctagonTwoTone;