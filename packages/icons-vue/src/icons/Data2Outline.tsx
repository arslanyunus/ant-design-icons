// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { FunctionalComponent } from 'vue';
import Data2OutlineSvg from '@ant-design/icons-svg/lib/asn/Data2Outline';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

export interface Data2OutlineIconType extends FunctionalComponent<AntdIconProps> {
  displayName: string;
}

const Data2Outline: Data2OutlineIconType = (props, context) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={Data2OutlineSvg}></AntdIcon>;
};

Data2Outline.displayName = 'Data2Outline';
Data2Outline.inheritAttrs = false;
export default Data2Outline;