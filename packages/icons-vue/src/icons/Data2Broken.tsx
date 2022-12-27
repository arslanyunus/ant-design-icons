// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { FunctionalComponent } from 'vue';
import Data2BrokenSvg from '@ant-design/icons-svg/lib/asn/Data2Broken';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

export interface Data2BrokenIconType extends FunctionalComponent<AntdIconProps> {
  displayName: string;
}

const Data2Broken: Data2BrokenIconType = (props, context) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={Data2BrokenSvg}></AntdIcon>;
};

Data2Broken.displayName = 'Data2Broken';
Data2Broken.inheritAttrs = false;
export default Data2Broken;