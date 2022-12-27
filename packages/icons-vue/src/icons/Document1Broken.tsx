// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { FunctionalComponent } from 'vue';
import Document1BrokenSvg from '@ant-design/icons-svg/lib/asn/Document1Broken';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

export interface Document1BrokenIconType extends FunctionalComponent<AntdIconProps> {
  displayName: string;
}

const Document1Broken: Document1BrokenIconType = (props, context) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={Document1BrokenSvg}></AntdIcon>;
};

Document1Broken.displayName = 'Document1Broken';
Document1Broken.inheritAttrs = false;
export default Document1Broken;