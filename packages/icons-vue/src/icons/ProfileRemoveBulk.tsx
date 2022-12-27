// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { FunctionalComponent } from 'vue';
import ProfileRemoveBulkSvg from '@ant-design/icons-svg/lib/asn/ProfileRemoveBulk';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

export interface ProfileRemoveBulkIconType extends FunctionalComponent<AntdIconProps> {
  displayName: string;
}

const ProfileRemoveBulk: ProfileRemoveBulkIconType = (props, context) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={ProfileRemoveBulkSvg}></AntdIcon>;
};

ProfileRemoveBulk.displayName = 'ProfileRemoveBulk';
ProfileRemoveBulk.inheritAttrs = false;
export default ProfileRemoveBulk;