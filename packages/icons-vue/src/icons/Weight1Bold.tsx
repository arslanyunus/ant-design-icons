// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { FunctionalComponent } from 'vue';
import Weight1BoldSvg from '@ant-design/icons-svg/lib/asn/Weight1Bold';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

export interface Weight1BoldIconType extends FunctionalComponent<AntdIconProps> {
  displayName: string;
}

const Weight1Bold: Weight1BoldIconType = (props, context) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={Weight1BoldSvg}></AntdIcon>;
};

Weight1Bold.displayName = 'Weight1Bold';
Weight1Bold.inheritAttrs = false;
export default Weight1Bold;