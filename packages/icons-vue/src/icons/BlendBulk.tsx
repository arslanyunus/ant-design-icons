// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { FunctionalComponent } from 'vue';
import BlendBulkSvg from '@ant-design/icons-svg/lib/asn/BlendBulk';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

export interface BlendBulkIconType extends FunctionalComponent<AntdIconProps> {
  displayName: string;
}

const BlendBulk: BlendBulkIconType = (props, context) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={BlendBulkSvg}></AntdIcon>;
};

BlendBulk.displayName = 'BlendBulk';
BlendBulk.inheritAttrs = false;
export default BlendBulk;