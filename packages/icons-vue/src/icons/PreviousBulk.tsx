// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { FunctionalComponent } from 'vue';
import PreviousBulkSvg from '@ant-design/icons-svg/lib/asn/PreviousBulk';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

export interface PreviousBulkIconType extends FunctionalComponent<AntdIconProps> {
  displayName: string;
}

const PreviousBulk: PreviousBulkIconType = (props, context) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={PreviousBulkSvg}></AntdIcon>;
};

PreviousBulk.displayName = 'PreviousBulk';
PreviousBulk.inheritAttrs = false;
export default PreviousBulk;