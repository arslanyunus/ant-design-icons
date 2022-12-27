// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { FunctionalComponent } from 'vue';
import CrownBulkSvg from '@ant-design/icons-svg/lib/asn/CrownBulk';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

export interface CrownBulkIconType extends FunctionalComponent<AntdIconProps> {
  displayName: string;
}

const CrownBulk: CrownBulkIconType = (props, context) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={CrownBulkSvg}></AntdIcon>;
};

CrownBulk.displayName = 'CrownBulk';
CrownBulk.inheritAttrs = false;
export default CrownBulk;