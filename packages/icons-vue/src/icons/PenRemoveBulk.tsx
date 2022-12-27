// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { FunctionalComponent } from 'vue';
import PenRemoveBulkSvg from '@ant-design/icons-svg/lib/asn/PenRemoveBulk';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

export interface PenRemoveBulkIconType extends FunctionalComponent<AntdIconProps> {
  displayName: string;
}

const PenRemoveBulk: PenRemoveBulkIconType = (props, context) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={PenRemoveBulkSvg}></AntdIcon>;
};

PenRemoveBulk.displayName = 'PenRemoveBulk';
PenRemoveBulk.inheritAttrs = false;
export default PenRemoveBulk;