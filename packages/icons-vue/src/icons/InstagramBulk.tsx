// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { FunctionalComponent } from 'vue';
import InstagramBulkSvg from '@ant-design/icons-svg/lib/asn/InstagramBulk';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

export interface InstagramBulkIconType extends FunctionalComponent<AntdIconProps> {
  displayName: string;
}

const InstagramBulk: InstagramBulkIconType = (props, context) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={InstagramBulkSvg}></AntdIcon>;
};

InstagramBulk.displayName = 'InstagramBulk';
InstagramBulk.inheritAttrs = false;
export default InstagramBulk;