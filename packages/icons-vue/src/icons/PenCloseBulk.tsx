// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { FunctionalComponent } from 'vue';
import PenCloseBulkSvg from '@ant-design/icons-svg/lib/asn/PenCloseBulk';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

export interface PenCloseBulkIconType extends FunctionalComponent<AntdIconProps> {
  displayName: string;
}

const PenCloseBulk: PenCloseBulkIconType = (props, context) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={PenCloseBulkSvg}></AntdIcon>;
};

PenCloseBulk.displayName = 'PenCloseBulk';
PenCloseBulk.inheritAttrs = false;
export default PenCloseBulk;