// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { FunctionalComponent } from 'vue';
import Ram2LinearSvg from '@ant-design/icons-svg/lib/asn/Ram2Linear';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

export interface Ram2LinearIconType extends FunctionalComponent<AntdIconProps> {
  displayName: string;
}

const Ram2Linear: Ram2LinearIconType = (props, context) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={Ram2LinearSvg}></AntdIcon>;
};

Ram2Linear.displayName = 'Ram2Linear';
Ram2Linear.inheritAttrs = false;
export default Ram2Linear;