// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { FunctionalComponent } from 'vue';
import Send1LinearSvg from '@ant-design/icons-svg/lib/asn/Send1Linear';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

export interface Send1LinearIconType extends FunctionalComponent<AntdIconProps> {
  displayName: string;
}

const Send1Linear: Send1LinearIconType = (props, context) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={Send1LinearSvg}></AntdIcon>;
};

Send1Linear.displayName = 'Send1Linear';
Send1Linear.inheritAttrs = false;
export default Send1Linear;