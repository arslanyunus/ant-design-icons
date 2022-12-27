// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { FunctionalComponent } from 'vue';
import Receipt2BrokenSvg from '@ant-design/icons-svg/lib/asn/Receipt2Broken';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

export interface Receipt2BrokenIconType extends FunctionalComponent<AntdIconProps> {
  displayName: string;
}

const Receipt2Broken: Receipt2BrokenIconType = (props, context) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={Receipt2BrokenSvg}></AntdIcon>;
};

Receipt2Broken.displayName = 'Receipt2Broken';
Receipt2Broken.inheritAttrs = false;
export default Receipt2Broken;