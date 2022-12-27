// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { FunctionalComponent } from 'vue';
import Document1OutlineSvg from '@ant-design/icons-svg/lib/asn/Document1Outline';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

export interface Document1OutlineIconType extends FunctionalComponent<AntdIconProps> {
  displayName: string;
}

const Document1Outline: Document1OutlineIconType = (props, context) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={Document1OutlineSvg}></AntdIcon>;
};

Document1Outline.displayName = 'Document1Outline';
Document1Outline.inheritAttrs = false;
export default Document1Outline;