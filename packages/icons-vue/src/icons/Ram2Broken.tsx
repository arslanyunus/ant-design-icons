// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { FunctionalComponent } from 'vue';
import Ram2BrokenSvg from '@ant-design/icons-svg/lib/asn/Ram2Broken';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

export interface Ram2BrokenIconType extends FunctionalComponent<AntdIconProps> {
  displayName: string;
}

const Ram2Broken: Ram2BrokenIconType = (props, context) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={Ram2BrokenSvg}></AntdIcon>;
};

Ram2Broken.displayName = 'Ram2Broken';
Ram2Broken.inheritAttrs = false;
export default Ram2Broken;