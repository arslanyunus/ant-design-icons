// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { FunctionalComponent } from 'vue';
import DirectDownBulkSvg from '@ant-design/icons-svg/lib/asn/DirectDownBulk';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

export interface DirectDownBulkIconType extends FunctionalComponent<AntdIconProps> {
  displayName: string;
}

const DirectDownBulk: DirectDownBulkIconType = (props, context) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={DirectDownBulkSvg}></AntdIcon>;
};

DirectDownBulk.displayName = 'DirectDownBulk';
DirectDownBulk.inheritAttrs = false;
export default DirectDownBulk;