// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { FunctionalComponent } from 'vue';
import ProfileTickTwoToneSvg from '@ant-design/icons-svg/lib/asn/ProfileTickTwoTone';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

export interface ProfileTickTwoToneIconType extends FunctionalComponent<AntdIconProps> {
  displayName: string;
}

const ProfileTickTwoTone: ProfileTickTwoToneIconType = (props, context) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={ProfileTickTwoToneSvg}></AntdIcon>;
};

ProfileTickTwoTone.displayName = 'ProfileTickTwoTone';
ProfileTickTwoTone.inheritAttrs = false;
export default ProfileTickTwoTone;