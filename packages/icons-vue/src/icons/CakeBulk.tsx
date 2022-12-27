// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { FunctionalComponent } from 'vue';
import CakeBulkSvg from '@ant-design/icons-svg/lib/asn/CakeBulk';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

export interface CakeBulkIconType extends FunctionalComponent<AntdIconProps> {
  displayName: string;
}

const CakeBulk: CakeBulkIconType = (props, context) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={CakeBulkSvg}></AntdIcon>;
};

CakeBulk.displayName = 'CakeBulk';
CakeBulk.inheritAttrs = false;
export default CakeBulk;