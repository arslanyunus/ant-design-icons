// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { FunctionalComponent } from 'vue';
import Ram2OutlineSvg from '@ant-design/icons-svg/lib/asn/Ram2Outline';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

export interface Ram2OutlineIconType extends FunctionalComponent<AntdIconProps> {
  displayName: string;
}

const Ram2Outline: Ram2OutlineIconType = (props, context) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={Ram2OutlineSvg}></AntdIcon>;
};

Ram2Outline.displayName = 'Ram2Outline';
Ram2Outline.inheritAttrs = false;
export default Ram2Outline;