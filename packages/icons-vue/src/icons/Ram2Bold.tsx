// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { FunctionalComponent } from 'vue';
import Ram2BoldSvg from '@ant-design/icons-svg/lib/asn/Ram2Bold';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

export interface Ram2BoldIconType extends FunctionalComponent<AntdIconProps> {
  displayName: string;
}

const Ram2Bold: Ram2BoldIconType = (props, context) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={Ram2BoldSvg}></AntdIcon>;
};

Ram2Bold.displayName = 'Ram2Bold';
Ram2Bold.inheritAttrs = false;
export default Ram2Bold;