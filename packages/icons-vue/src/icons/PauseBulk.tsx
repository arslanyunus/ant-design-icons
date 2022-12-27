// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { FunctionalComponent } from 'vue';
import PauseBulkSvg from '@ant-design/icons-svg/lib/asn/PauseBulk';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

export interface PauseBulkIconType extends FunctionalComponent<AntdIconProps> {
  displayName: string;
}

const PauseBulk: PauseBulkIconType = (props, context) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={PauseBulkSvg}></AntdIcon>;
};

PauseBulk.displayName = 'PauseBulk';
PauseBulk.inheritAttrs = false;
export default PauseBulk;