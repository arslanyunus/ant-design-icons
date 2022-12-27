// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { FunctionalComponent } from 'vue';
import PenToolBulkSvg from '@ant-design/icons-svg/lib/asn/PenToolBulk';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

export interface PenToolBulkIconType extends FunctionalComponent<AntdIconProps> {
  displayName: string;
}

const PenToolBulk: PenToolBulkIconType = (props, context) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={PenToolBulkSvg}></AntdIcon>;
};

PenToolBulk.displayName = 'PenToolBulk';
PenToolBulk.inheritAttrs = false;
export default PenToolBulk;