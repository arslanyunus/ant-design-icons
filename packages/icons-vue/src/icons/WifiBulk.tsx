// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { FunctionalComponent } from 'vue';
import WifiBulkSvg from '@ant-design/icons-svg/lib/asn/WifiBulk';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

export interface WifiBulkIconType extends FunctionalComponent<AntdIconProps> {
  displayName: string;
}

const WifiBulk: WifiBulkIconType = (props, context) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={WifiBulkSvg}></AntdIcon>;
};

WifiBulk.displayName = 'WifiBulk';
WifiBulk.inheritAttrs = false;
export default WifiBulk;