// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { FunctionalComponent } from 'vue';
import DirectboxDefaultBulkSvg from '@ant-design/icons-svg/lib/asn/DirectboxDefaultBulk';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

export interface DirectboxDefaultBulkIconType extends FunctionalComponent<AntdIconProps> {
  displayName: string;
}

const DirectboxDefaultBulk: DirectboxDefaultBulkIconType = (props, context) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={DirectboxDefaultBulkSvg}></AntdIcon>;
};

DirectboxDefaultBulk.displayName = 'DirectboxDefaultBulk';
DirectboxDefaultBulk.inheritAttrs = false;
export default DirectboxDefaultBulk;