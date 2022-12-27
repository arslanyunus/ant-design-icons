// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { FunctionalComponent } from 'vue';
import ProfileCircleBulkSvg from '@ant-design/icons-svg/lib/asn/ProfileCircleBulk';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

export interface ProfileCircleBulkIconType extends FunctionalComponent<AntdIconProps> {
  displayName: string;
}

const ProfileCircleBulk: ProfileCircleBulkIconType = (props, context) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={ProfileCircleBulkSvg}></AntdIcon>;
};

ProfileCircleBulk.displayName = 'ProfileCircleBulk';
ProfileCircleBulk.inheritAttrs = false;
export default ProfileCircleBulk;