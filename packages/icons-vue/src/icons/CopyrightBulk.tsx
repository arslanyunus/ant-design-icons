// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { FunctionalComponent } from 'vue';
import CopyrightBulkSvg from '@ant-design/icons-svg/lib/asn/CopyrightBulk';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

export interface CopyrightBulkIconType extends FunctionalComponent<AntdIconProps> {
  displayName: string;
}

const CopyrightBulk: CopyrightBulkIconType = (props, context) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={CopyrightBulkSvg}></AntdIcon>;
};

CopyrightBulk.displayName = 'CopyrightBulk';
CopyrightBulk.inheritAttrs = false;
export default CopyrightBulk;