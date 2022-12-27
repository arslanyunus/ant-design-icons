// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { FunctionalComponent } from 'vue';
import ScissorBulkSvg from '@ant-design/icons-svg/lib/asn/ScissorBulk';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

export interface ScissorBulkIconType extends FunctionalComponent<AntdIconProps> {
  displayName: string;
}

const ScissorBulk: ScissorBulkIconType = (props, context) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={ScissorBulkSvg}></AntdIcon>;
};

ScissorBulk.displayName = 'ScissorBulk';
ScissorBulk.inheritAttrs = false;
export default ScissorBulk;