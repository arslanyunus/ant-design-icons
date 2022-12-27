// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { FunctionalComponent } from 'vue';
import DirectRightBulkSvg from '@ant-design/icons-svg/lib/asn/DirectRightBulk';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

export interface DirectRightBulkIconType extends FunctionalComponent<AntdIconProps> {
  displayName: string;
}

const DirectRightBulk: DirectRightBulkIconType = (props, context) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={DirectRightBulkSvg}></AntdIcon>;
};

DirectRightBulk.displayName = 'DirectRightBulk';
DirectRightBulk.inheritAttrs = false;
export default DirectRightBulk;