// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { FunctionalComponent } from 'vue';
import DirectUpBulkSvg from '@ant-design/icons-svg/lib/asn/DirectUpBulk';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

export interface DirectUpBulkIconType extends FunctionalComponent<AntdIconProps> {
  displayName: string;
}

const DirectUpBulk: DirectUpBulkIconType = (props, context) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={DirectUpBulkSvg}></AntdIcon>;
};

DirectUpBulk.displayName = 'DirectUpBulk';
DirectUpBulk.inheritAttrs = false;
export default DirectUpBulk;