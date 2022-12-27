// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { FunctionalComponent } from 'vue';
import ProfileAddTwoToneSvg from '@ant-design/icons-svg/lib/asn/ProfileAddTwoTone';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

export interface ProfileAddTwoToneIconType extends FunctionalComponent<AntdIconProps> {
  displayName: string;
}

const ProfileAddTwoTone: ProfileAddTwoToneIconType = (props, context) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={ProfileAddTwoToneSvg}></AntdIcon>;
};

ProfileAddTwoTone.displayName = 'ProfileAddTwoTone';
ProfileAddTwoTone.inheritAttrs = false;
export default ProfileAddTwoTone;