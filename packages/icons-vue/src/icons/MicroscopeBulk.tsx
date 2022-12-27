// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { FunctionalComponent } from 'vue';
import MicroscopeBulkSvg from '@ant-design/icons-svg/lib/asn/MicroscopeBulk';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

export interface MicroscopeBulkIconType extends FunctionalComponent<AntdIconProps> {
  displayName: string;
}

const MicroscopeBulk: MicroscopeBulkIconType = (props, context) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={MicroscopeBulkSvg}></AntdIcon>;
};

MicroscopeBulk.displayName = 'MicroscopeBulk';
MicroscopeBulk.inheritAttrs = false;
export default MicroscopeBulk;