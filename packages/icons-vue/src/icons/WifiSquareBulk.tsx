// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { FunctionalComponent } from 'vue';
import WifiSquareBulkSvg from '@ant-design/icons-svg/lib/asn/WifiSquareBulk';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

export interface WifiSquareBulkIconType extends FunctionalComponent<AntdIconProps> {
  displayName: string;
}

const WifiSquareBulk: WifiSquareBulkIconType = (props, context) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={WifiSquareBulkSvg}></AntdIcon>;
};

WifiSquareBulk.displayName = 'WifiSquareBulk';
WifiSquareBulk.inheritAttrs = false;
export default WifiSquareBulk;