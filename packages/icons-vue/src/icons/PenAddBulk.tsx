// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { FunctionalComponent } from 'vue';
import PenAddBulkSvg from '@ant-design/icons-svg/lib/asn/PenAddBulk';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

export interface PenAddBulkIconType extends FunctionalComponent<AntdIconProps> {
  displayName: string;
}

const PenAddBulk: PenAddBulkIconType = (props, context) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={PenAddBulkSvg}></AntdIcon>;
};

PenAddBulk.displayName = 'PenAddBulk';
PenAddBulk.inheritAttrs = false;
export default PenAddBulk;