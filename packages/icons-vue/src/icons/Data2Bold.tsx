// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { FunctionalComponent } from 'vue';
import Data2BoldSvg from '@ant-design/icons-svg/lib/asn/Data2Bold';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

export interface Data2BoldIconType extends FunctionalComponent<AntdIconProps> {
  displayName: string;
}

const Data2Bold: Data2BoldIconType = (props, context) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={Data2BoldSvg}></AntdIcon>;
};

Data2Bold.displayName = 'Data2Bold';
Data2Bold.inheritAttrs = false;
export default Data2Bold;