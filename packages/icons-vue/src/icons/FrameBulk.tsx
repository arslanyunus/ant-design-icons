// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { FunctionalComponent } from 'vue';
import FrameBulkSvg from '@ant-design/icons-svg/lib/asn/FrameBulk';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

export interface FrameBulkIconType extends FunctionalComponent<AntdIconProps> {
  displayName: string;
}

const FrameBulk: FrameBulkIconType = (props, context) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={FrameBulkSvg}></AntdIcon>;
};

FrameBulk.displayName = 'FrameBulk';
FrameBulk.inheritAttrs = false;
export default FrameBulk;