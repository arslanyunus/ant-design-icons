// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { FunctionalComponent } from 'vue';
import ProfileCircleOutlineSvg from '@ant-design/icons-svg/lib/asn/ProfileCircleOutline';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

export interface ProfileCircleOutlineIconType extends FunctionalComponent<AntdIconProps> {
  displayName: string;
}

const ProfileCircleOutline: ProfileCircleOutlineIconType = (props, context) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={ProfileCircleOutlineSvg}></AntdIcon>;
};

ProfileCircleOutline.displayName = 'ProfileCircleOutline';
ProfileCircleOutline.inheritAttrs = false;
export default ProfileCircleOutline;