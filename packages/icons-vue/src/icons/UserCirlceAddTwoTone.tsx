// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { FunctionalComponent } from 'vue';
import UserCirlceAddTwoToneSvg from '@ant-design/icons-svg/lib/asn/UserCirlceAddTwoTone';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

export interface UserCirlceAddTwoToneIconType extends FunctionalComponent<AntdIconProps> {
  displayName: string;
}

const UserCirlceAddTwoTone: UserCirlceAddTwoToneIconType = (props, context) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={UserCirlceAddTwoToneSvg}></AntdIcon>;
};

UserCirlceAddTwoTone.displayName = 'UserCirlceAddTwoTone';
UserCirlceAddTwoTone.inheritAttrs = false;
export default UserCirlceAddTwoTone;