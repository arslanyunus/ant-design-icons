// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { FunctionalComponent } from 'vue';
import Send1OutlineSvg from '@ant-design/icons-svg/lib/asn/Send1Outline';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

export interface Send1OutlineIconType extends FunctionalComponent<AntdIconProps> {
  displayName: string;
}

const Send1Outline: Send1OutlineIconType = (props, context) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={Send1OutlineSvg}></AntdIcon>;
};

Send1Outline.displayName = 'Send1Outline';
Send1Outline.inheritAttrs = false;
export default Send1Outline;