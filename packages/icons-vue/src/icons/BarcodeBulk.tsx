// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { FunctionalComponent } from 'vue';
import BarcodeBulkSvg from '@ant-design/icons-svg/lib/asn/BarcodeBulk';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

export interface BarcodeBulkIconType extends FunctionalComponent<AntdIconProps> {
  displayName: string;
}

const BarcodeBulk: BarcodeBulkIconType = (props, context) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={BarcodeBulkSvg}></AntdIcon>;
};

BarcodeBulk.displayName = 'BarcodeBulk';
BarcodeBulk.inheritAttrs = false;
export default BarcodeBulk;